import Empreendedor from '../models/Empreendedor';
import imagesView   from './images_view';

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
            images: imagesView.renderMany(empreendedor.images)
        };
    },

    renderMany(empreendedores: Empreendedor[]){
        return empreendedores.map(empreendedor => this.render(empreendedor));
    }
};