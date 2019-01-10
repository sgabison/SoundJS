import Sound from "../Sound"
import Effect from "./Effect"

export default class LowPassFilter extends Effect {

	set Q(val){
		this.filterNode.Q.value = val;
	}

	get Q(){
		return this.filterNode.Q.value;
	}

	set frequency(val){
		this.filterNode.frequency.value = val;
	}

	get frequency(){
		return this.filterNode.frequency.value;
	}

	constructor(cutoffFrequency = 2000, Q = 1){
		super();

		this.filterNode = Sound.context.createBiquadFilter();

		this.filterNode.type = "lowpass";
		this.frequency = cutoffFrequency;
		this.Q = Q;

		this.effectBus.connect(this.filterNode);
		this.filterNode.connect(this.wetGainNode);
	}

	clone(){
		return new LowPassFilter(this.frequency, this.Q);
	}


}
