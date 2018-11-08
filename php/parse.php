<?php
    // andere php-Klasse einbinden
    require_once ("world_data_parser.php");
    //neue Instanz erstellen
    $new=new WorldDataParser();
    // Pfad zur CSV
    $pfad = "../world_data_v1.csv";
    // durch parseCSV CSV in Array umwandeln
    $array = $new->parseCSV($pfad);
    //Array in <pre> Tags ausgeben
    echo ('<pre>');
    print_r($array);
    echo ('</pre>');
?>