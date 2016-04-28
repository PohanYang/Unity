#pragma strict
var pikachu: Transform;
function Start () {

}

function Update () {	
    transform.LookAt(gameObject.Find("pikachu").transform.position);
}