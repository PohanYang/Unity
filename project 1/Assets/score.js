#pragma strict
static var score: int;
var guiScore: GUIText;
function Start () {

}

function Update () {

}

function OnGUI(){
    guiScore.text="Trendy Score: "+score;
}