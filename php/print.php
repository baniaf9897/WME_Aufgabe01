<?php
    // andere php-Klasse einbinden
    require_once ("world_data_parser.php");
    //neue Instanz erstellen
    $worldDataParser = new WorldDataParser();
    // Pfad zur CSV
    $pfad = "../world_data_v1.csv";
    // durch parseCSV CSV in Array umwandeln
    $array = $worldDataParser->parseCSV($pfad);
    //saveXML aufrufen
    $antwort = $worldDataParser->saveXML($array);
    //Antwort ausgeben
    if ($antwort == true){
        print "XML Savestatus: erfolgreich";
        $result = $worldDataParser->printXml("world_data.xml","../stylesheet.xsl");
    }
    else{
        print "XML Savestatus: nicht erfolgreich";

    }
?>