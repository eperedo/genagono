export function downloadPng(text) {
	const s = new XMLSerializer().serializeToString(
		document.getElementById('octgen'),
	);
	const pbx = document.createElement('img');
	pbx.style.width = 512;
	pbx.style.height = 512;

	pbx.src = 'data:image/svg+xml;base64,' + window.btoa(s);
	pbx.onload = function() {
		// Create canvas to "convert svg to png"
		const uCanvas = document.createElement('canvas');
		uCanvas.setAttribute('width', 512);
		uCanvas.setAttribute('height', 512);
		uCanvas.getContext('2d').drawImage(pbx, 0, 0);
		let img = uCanvas.toDataURL('image/png');
		// img = img.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
		// img = img.replace(
		// 	/^data:application\/octet-stream/,
		// 	'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png',
		// );

		// Create link to simulate download
		const link = document.createElement('a');
		link.setAttribute('type', 'hidden');
		link.setAttribute('href', img);
		link.setAttribute('download', 'octagono.png');
		link.click();
		link.remove();
		if (ga) {
			ga('send', 'event', 'images', 'download', text);
		}
	};
}
