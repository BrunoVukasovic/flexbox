var counter=3;

// add element

$("#add-element").on("click", e => {
		counter++;
		$( "#flex-container" ).append( '<div  class = " ' + counter + ' ">' + counter + '</div>' );
});

// remove element

$("#remove-element").on("click", e => {	
		$( "." + counter ).remove();
		counter--;
});

// justify-content

$("#flex-start").on("click", e => {
		$("div").css("justify-content", "flex-start");
});

$("#flex-end").on("click", e => {
		$("div").css("justify-content", "flex-end");
});

$("#center").on("click", e => {
		$("div").css("justify-content", "center");
});

$("#space-between").on("click", e => {
		$("div").css("justify-content", "space-between");
});

$("#space-around").on("click", e => {
		$("div").css("justify-content", "space-around");
});

$("#cancel-justify-content").on("click", e => {
		$("div").css("justify-content", "");
});

// flex-direction

$("#row").on("click", e => {
		$("div").css("flex-direction", "row");
});

$("#row-reverse").on("click", e => {
		$("div").css("flex-direction", "row-reverse");
});

$("#column").on("click", e => {
		$("div").css("flex-direction", "column");
});

$("#column-reverse").on("click", e => {
		$("div").css("flex-direction", "column-reverse");
});

$("#cancel-flex-direction").on("click", e => {
		$("div").css("flex-direction", "");
});

// align-items

$("#flex-start-align-items").on("click", e => {
		$("div").css("align-items", "flex-start");
});

$("#flex-end-align-items").on("click", e => {
		$("div").css("align-items", "flex-end");
});

$("#center-align-items").on("click", e => {
		$("div").css("align-items", "center");
});

$("#baseline-align-items").on("click", e => {
		$("div").css("align-items", "baseline");
});

$("#stretch-align-items").on("click", e => {
		$("div").css("align-items", "stretch");
});

$("#cancel-align-items").on("click", e => {
		$("div").css("align-items", "");
});

// flex-wrap

$("#nowrap").on("click", e => {
		$("div").css("flex-wrap", "nowrap");
});

$("#wrap").on("click", e => {
		$("div").css("flex-wrap", "wrap");
});

$("#wrap-reverse").on("click", e => {
		$("div").css("flex-wrap", "wrap-reverse");
});

$("#cancel-flex-wrap").on("click", e => {
		$("div").css("flex-wrap", "");
});

// align-content

$("#flex-start-align-content").on("click", e => {
		$("div").css("align-content", "flex-start");
});

$("#flex-end-align-content").on("click", e => {
		$("div").css("align-content", "flex-end");
});

$("#center-align-content").on("click", e => {
		$("div").css("align-content", "center");
});

$("#space-between-align-content").on("click", e => {
		$("div").css("align-content", "space-between");
});

$("#space-around-align-content").on("click", e => {
		$("div").css("align-content", "space-around");
});

$("#stretch-align-content").on("click", e => {
		$("div").css("align-content", "stretch");
});

$("#cancel-align-content").on("click", e => {
		$("div").css("align-content", "");
});


