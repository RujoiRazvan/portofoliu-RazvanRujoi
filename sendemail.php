<?php
$mailto = 'razvanrujoi@yahoo.com';
$nume = $_POST[ 'name' ];
$email = $_POST[ 'email' ];
$headers = $nume . PHP_EOL . $email;
$subiect = $_POST[ 'subject' ];
$mesaj = 'Mesaj: ' . $_POST[ 'message' ];
$suma = @$_POST[ "suma" ];
$sumai = @$_POST[ "sumai" ];

if ( $suma == $sumai && $sumai > 0 ) {
	mail( $mailto, $subiect, $mesaj, $headers );
	echo "Mail-ul a fost trimis cu succes !";
	echo '<p><a href="/index.html">&laquo; Mergi la pagina anterioara</a></p>';
} else {
	echo "Mail-ul nu a fost trimis !";
	echo '<pre>';
	print_r( error_get_last() );
	echo '</pre>';
}
?>