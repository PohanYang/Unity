#pragma strict
var men: Transform;
function Start () {

}

function Update () {	
    //transform.LookAt(ball);
    transform.LookAt(gameObject.Find("men").transform.position);
}