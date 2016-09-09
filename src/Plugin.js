export default class Plugin {
	constructor(name){
		this.name = name
		app.plugins.add(this)
	}

	addModel(name, model){
		app.store.models[name] = model;
		app.store.data[name] = {}
	}

	addModels(array){
		array.map((tuple) => {
			app.store.models[tuple[0]] = tuple[1];
		app.store.data[tuple[0]] = {}
		})
	}

	addComponents(name, obj){
		app.components[name] = obj
	}

	addManager(name, manager){
		app.managers[name] = manager
	}
}