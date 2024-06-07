function crearModal(titulo){
	// buscar modal por id

	// modal setTitulo(titulo) ¿Seguro que quieres elegir a ${titulo}?
	// bs modal
	const modal = new bootstrap.Modal('#myModal', {
		keyboard: true
	});
	modal.title= `¿Seguro que quieres elegir a ${titulo}?`;
	modal.show= true;
}