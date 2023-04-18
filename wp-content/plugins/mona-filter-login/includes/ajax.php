<?php

function mona_ajax_logout() {
	wp_logout();
	wp_die();
}

add_action( 'wp_ajax_mona_ajax_logout', 'mona_ajax_logout' );

function mona_ajax_login() {
	$form = array();

	parse_str( $_POST['form'], $form );
	$args = array(
		'user_login'    => $form['user_name'],
		'user_password' => @$form['user_pass'],
		'remember'      => ( @$form['user_remember'] == 'yes' ? true : false )
	);
	$on   = wp_signon( $args );
	if ( is_wp_error( $on ) ) {
		echo json_encode( array( 'status' => 'error', 'mess' => $on->get_error_message() ) );
		wp_die();
	}
	$_SESSION['has_destroy'] = 'no';
	echo json_encode( array( 'status' => 'success', 'mess' => '' ) );
	wp_die();
}

add_action( 'wp_ajax_nopriv_mona_ajax_login', 'mona_ajax_login' );

function mona_ajax_register() {
	$form = array();
	parse_str( $_POST['form'], $form );
	$user = get_user_by( 'email', $form['register_email'] );
	if ( $user ) {
		echo json_encode( array(
			'status' => 'error',
			'mess'   => __( '<strong>Lỗi:</strong> Email đã có người đăng ký', 'monamedia' )
		) );
		wp_die();
	}
	$user = get_user_by( 'login', $form['register_loginname'] );
	if ( $user ) {
		echo json_encode( array(
			'status' => 'error',
			'mess'   => __( '<strong>Lỗi:</strong> Tên đăng nhập đã tồn tại', 'monamedia' )
		) );
		wp_die();
	}
	if ( $form['register_pass'] == '' || $form['register_pass'] != $form['register_repass'] ) {
		echo json_encode( array(
			'status' => 'error',
			'mess'   => __( '<strong>Lỗi:</strong> Mật khẩu và xác nhận mật khẩu không trùng khớp', 'monamedia' )
		) );
		wp_die();
	}
	if ( strlen( $form['register_pass'] ) < 6 ) {
		echo json_encode( array(
			'status' => 'error',
			'mess'   => __( '<strong>Lỗi:</strong> Mật khẩu phải có ít nhất 6 ký tự', 'monamedia' )
		) );
		wp_die();
	}

	$args = array(
		'user_login'   => $form['register_loginname'],
		'user_email'   => $form['register_loginname'],
		'user_pass'    => $form['register_pass'],
		// 'user_nicename' => $form['register_name'],
		'display_name' => $form['register_display'],
		// 'nickname' => $form['register_name'],
		//    'role' => 'author'
	);
	$ins  = wp_insert_user( $args );
	if ( is_wp_error( $ins ) ) {
		echo json_encode( array( 'status' => 'error', 'mess' => $ins->get_error_message() ) );
		wp_die();
	}
	$args = array(
		'user_login'    => $form['register_loginname'],
		'user_password' => @$form['register_pass'],
	);
	$on   = wp_signon( $args );
	update_user_meta( $ins, '_phone', $form['register_phone'] );
	// update_user_meta($ins, '_birthday', $form['register_birthday']);
	update_user_meta( $ins, '_sex', $form['register_sex'] );
	echo json_encode( array( 'status' => 'success', 'mess' => '' ) );
	wp_die();
}

add_action( 'wp_ajax_nopriv_mona_ajax_register', 'mona_ajax_register' );

function mona_ajax_send_foget_pass() {
	$form = array();
	parse_str( $_POST['form'], $form );
	$user_data = get_user_by( 'email', $form['register_email'] );
	if ( ! $user_data ) {
		echo json_encode( array(
			'status' => 'error',
			'mess'   => __( '<strong>Lỗi: </strong> Không tìm thấy thành viên ' . $form['register_email'], 'monamedia' )
		) );
		wp_die();
	}
	$user_login = $user_data->user_login;
	$user_email = $user_data->user_email;
	$key        = get_password_reset_key( $user_data );

	$message = __( 'Chào bạn ' . $user_data->data->display_name . ', ' ) . "\r\n\r\n";
	$message .= __( 'Bạn đã đề nghị lấy lại mật khẩu cho tài khoản trên ' ) . get_bloginfo( 'name' ) . "\r\n\r";
	$message .= __( 'Để lấy lại mật khẩu. Bạn vui lòng bấm vào đường dẫn bên dưới:' ) . "\r\n";
	$message .= '<' . get_the_permalink( MONA_FORGOT_PASS ) . "?reset&key=$key&login=" . rawurlencode( $user_login ) . ">\r\n";

	if ( $message && ! wp_mail( $user_email, wp_specialchars_decode( get_bloginfo( 'name' ) . ' Password Reset' ), $message ) ) {
		$error = '<strong>Lỗi:</strong>Không gửi được emal. Bạn vui lòng liên hệ admin để tìm hiểu thêm';
		echo json_encode( array( 'status' => 'error', 'mess' => $error ) );
		wp_die();
	} else {
		$success = '<h3 class="success">Email thay đổi mật khẩu đã được gửi đến email của bạn! Bạn vui lòng kiểm tra hòm thư </h3>';
		echo json_encode( array( 'status' => 'success', 'mess' => $success ) );
		wp_die();
	}
	wp_die();
}

add_action( 'wp_ajax_nopriv_mona_ajax_send_foget_pass', 'mona_ajax_send_foget_pass' );

function mona_ajax_reset_pass() {
	$form = array();
	parse_str( $_POST['form'], $form );
	$check = check_password_reset_key( @$form['key'], @$form['login'] );
	if ( is_wp_error( $check ) ) {
		echo json_encode( array(
			'status' => 'error',
			'mess'   => '<strong>Lỗi:</strong> Đường dẫn truy cập đã hết hạn'
		) );
		wp_die();
	}
	if ( strlen( $form['new_password'] ) < 6 ) {
		echo json_encode( array(
			'status' => 'error',
			'mess'   => __( '<strong>Lỗi:</strong> Mật khẩu mới phải có ít nhất 6 ký tự', 'monamedia' )
		) );
		wp_die();
	}
	if ( @$form['new_password'] !== @$form['usr_reset_pass'] ) {
		echo json_encode( array(
			'status' => 'error',
			'mess'   => __( '<strong>Lỗi:</strong> Mật khẩu và xác nhận mật khẩu không trùng khớp', 'monamedia' )
		) );
		wp_die();
	}
	$user_data = get_user_by( 'login', $form['login'] );
	reset_password( $user_data, @$form['new_password'] );
	if ( $user_data ) {
		wp_clear_auth_cookie();
		wp_set_auth_cookie( $user_data->ID, true );
		do_action( 'wp_login', $user_data->user_login, $user_data );
	}
	echo json_encode( array( 'status' => 'success', 'mess' => get_home_url() ) );
	wp_die();
}

add_action( 'wp_ajax_nopriv_mona_ajax_reset_pass', 'mona_ajax_reset_pass' );
