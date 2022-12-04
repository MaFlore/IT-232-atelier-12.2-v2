function actualiserPage() {
    document.getElementById('charge').style.visibility = "visible";
    if (objet_xml_http_request.readyState == 4) {
        if (objet_xml_http_request.status == 200) {

            var nouveauResultatXml = objet_xml_http_request.responseXML;

            var gainTxt = nouveauResultatXml.getElementsByTagName("gain")[0].firstChild.nodeValue;
            var nomTxt = nouveauResultatXml.getElementsByTagName("nom")[0].firstChild.nodeValue;

            console.log(gainTxt);
            console.log(nomTxt);

            remplacerContenu('resultat', gainTxt);
            remplacerContenu('gagnant', nomTxt);
            document.getElementById('info').style.visibility = "visible";
            document.getElementById('button').disabled = false;
            document.getElementById('charge').style.visibility = "hidden";
        } else {
            document.getElementById('info').innerHTML = "Erreur du serveur :" + objet_xml_http_request.status + " - " + objet_xml_http_request.statusText;
            document.getElementById('info').style.visibility = "visible";
            document.getElementById('button').disabled = false;
            document.getElementById('charge').style.visibility = "visible";
            objet_xml_http_request.abort();
            objet_xml_http_request = null;
        }
    }
}

function codeContenu(id) {
    var contenu = document.getElementById(id).value;
    return encodeURIComponent(contenu);
}

function remplacerContenu(id, valeur) {
    var contenu = document.getElementById(id).innerHTML = valeur;
    return encodeURIComponent(contenu);
}