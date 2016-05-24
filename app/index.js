$().ready(function() {
	$("#MySplitter").splitter({
		splitVertical: true,
		outline: true,
		sizeLeft: true,
		resizeTo: window
	});
	$("#RightPane").splitter({
		splitHorizontal: true,
		sizeTop: true,
		accessKey: "H"
	});
});