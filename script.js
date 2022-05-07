// rotating elements parent
const container = document.querySelector('.container');

// rotating element
const block = document.querySelector('.block');

// position rotating element in the center of its parent
function centerChildInParent(child, parent) {
	const childWidth = child.offsetWidth;
	const childHeight = child.offsetHeight;
	const halfChildWidth = childWidth / 2;
	const halfChildHeight = childHeight / 2;

	const parentWidth = parent.offsetWidth;
	const parentHeight = parent.offsetHeight;
	const halfParentWidth = parentWidth / 2;
	const halfParentHeight = parentHeight / 2;

	const xCenter = halfParentWidth - halfChildWidth;
	const yCenter = halfParentHeight - halfChildHeight;

	block.style.transform += `translate(${xCenter}px , ${yCenter}px)`;
}

centerChildInParent(block, container);
