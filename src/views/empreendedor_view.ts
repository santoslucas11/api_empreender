import Empreendedor from '../models/Empreendedor';

export default{
    render(empreendedor: Empreendedor){
        return{
            id: empreendedor.id,
            name: empreendedor.name,
            latitude: empreendedor.latitude,
            longitude: empreendedor.longitude,
            about: empreendedor.about,
            instructions: empreendedor.instructions,
            opening_hours: empreendedor.opening_hours,
            open_on_weekends: empreendedor.open_on_weekends,
        };
    },

    renderMany(empreendedores: Empreendedor[]){
        return empreendedores.map(empreendedor => this.render(empreendedor));
    }
};