using UnityEngine;
using System.Collections;
using Vuforia;
public class ButtonEvent : MonoBehaviour, IVirtualButtonEventHandler {
	public GameObject hand;
	public GameObject ball;
	public GameObject pikachu;
	public Vector3 newPosition;
	// Use this for initialization
	void Start () {
		newPosition = hand.transform.position;
		VirtualButtonBehaviour[] vbs = GetComponentsInChildren<VirtualButtonBehaviour>();
		for (int i = 0; i < vbs.Length; ++i) {
			vbs[i].RegisterEventHandler(this);
		}

	}
	void Awake(){
		newPosition = hand.transform.position;
	}
	// Update is called once per frame
	void Update () {		
		ball.transform.position = Vector3.Lerp (ball.transform.position, newPosition, Time.deltaTime);
	}
	public void OnButtonPressed(VirtualButtonAbstractBehaviour vb){
		Debug.Log(vb.VirtualButtonName+"pressed");
		newPosition = pikachu.transform.position;
	}
	public void OnButtonReleased(VirtualButtonAbstractBehaviour vb){
		Debug.Log(vb.VirtualButtonName+"release");		
		newPosition = hand.transform.position;
	}

}
