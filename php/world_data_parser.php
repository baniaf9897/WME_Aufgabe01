<?php 

class WorldDataParser{

    function parseCSV($pfad){
        //eine array_map wird aus CSV erstellt
        $map = array_map('str_getcsv', file($pfad));
        //erste Zeile der CSV wird als Header gespeichert
        //array_map wird verkürzt
        $head = array_shift($map);
        //erstellt einen leeren Array
        $csv = array();
        //Schleife, die einen Array erzeugt, wo es einen Array als Schlüssel gibt und einen Array für die Werte
        foreach ($map as $row) {
            $csv[] = array_combine($head, $row);
        }
        //gibt den Array zurück
        return $csv;
    }

    function saveXML($array){
        //erstellen der Antwortvariable
        $antwort = false;
        //XML Variable erstellen
        $xml = new SimpleXMLElement("<?xml version=\"1.0\" encoding=\"UTF-8\"?><world_data></world_data>");
        //innere Funtion zum Umwandeln des Array in XML
        function xmlWandler($array, &$xml)
        {
            //Schleife um durch alles durchzugehen
            foreach ($array as $key => $value) {
                //wenn $value ein Array ist
                if (is_array($value)) {
                    //wenn $key nicht numerisch ist, der xml $key hinzufügen
                    if (!is_numeric($key)) {
                        $subnode = $xml->addChild("$key");
                        //Funktion wieder aufgerufen mit neuer xml und dem Rest des Array
                        xmlWandler($value, $subnode);
                    }
                    //wenn doch wird der xml die item-Nummer hinzugefügt
                    else {
                        $subnode = $xml->addChild("item$key");
                        //Funktion wieder aufgerufen mit neuer xml und dem Rest des Array
                        xmlWandler($value, $subnode);
                    }
                }
                //wenn $value kein Array ist (in einem Element), wird das Element dem xml hinzugefügt
                else {
                    $xml->addChild("$key", htmlspecialchars("$value"));
                }
            }
        }
        //Aufruf der Funktion
        xmlWandler($array, $xml);
        //speichern der XML-Datei
        $xml_file = $xml->asXML('world_data.xml');
        //Boolvariable setzen
        if($xml_file){
            $antwort = true;
        }else{
            $antwort = false;
        }
        //Bool zurückgeben
        return $antwort;
    }

    function printXML($pfadXML,$pfadXSL){
        // Load the XML source
        $xml = new DOMDocument;
        $xml->load($pfadXML);

        $xsl = new DOMDocument;
        $xsl->load($pfadXSL);

        // Configure the transformer
        $proc = new XSLTProcessor;
        $proc->importStyleSheet($xsl); // attach the xsl rules

        $newDoc = $proc->transformToDoc($xml);
        echo $newDoc->saveHTML();;


    }

}

?>