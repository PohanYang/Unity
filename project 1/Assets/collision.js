#pragma strict

function Start () {

}

function Update () {

}
var sound: GameObject;
var prticle_sys_1: GameObject;

function OnCollisionEnter(collision : Collision){
    if(collision.gameObject.name=="apple"){
        Destroy(collision.gameObject);
        Instantiate(sound, transform.position, transform.rotation);
        score.score += 1;
    }
}