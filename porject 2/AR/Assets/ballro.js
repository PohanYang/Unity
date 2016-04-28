#pragma strict
public var moveSpeed : float = 10f;
public var turnSpeed : float = 50f;
var picachu:NavMeshAgent; //帶有NavMeshAgent屬性的物件=Player
var ball:Transform; //NPC物件

function Start () {

}

function Update () {
    this.transform.Rotate(Vector3.forward, 100*Time.deltaTime);
    picachu.destination=ball.position; //玩家終點位置=NPC所在位置
}