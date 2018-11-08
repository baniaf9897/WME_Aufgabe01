<?php 

class WorldDataParser{

    function parseCSV($pfad){
        //eine array_map wird aus CSV erstellt
        $map = array_map('str_getcsv', file('../world_data_v1.csv'));
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

    function saveXML(){

    }

    function printXML(){

    }

}

?>