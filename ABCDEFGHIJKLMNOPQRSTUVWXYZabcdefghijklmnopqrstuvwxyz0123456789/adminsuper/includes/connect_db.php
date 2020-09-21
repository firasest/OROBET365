<?php
// Connexion à la base de données
	try {
		$bdd = new PDO('mysql:host=orobetgorobet.mysql.db;dbname=orobetgorobet', 'orobetgorobet', 'Ahmedorobet20200918');

	} catch(Exception $e) {
		die('Erreur: '.$e->getMessage());
		
	}$bdd->query("SET NAMES UTF8")	
	?>