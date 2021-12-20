import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';
import PrecioServicio from '../servicios/PrecioServicio';
import CompraProducto from '../servicios/CompraProducto';
import Clasificacion from '../clasificacion/Clasificacion';
import StatusCarta from '../servicios/StatusCarta';



const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const config ={
  width: "400px",
  height: "500px", 
  floating: true,
  
};

class SimpleForm extends Component {
  render() {
    return (
      
        <ThemeProvider theme  ={theme }>
      <ChatBot
       
       headerTitle="Repuesto de piezas"
       placeholder="Escriba su mensaje"
       botAvatar="https://pngset.com/images/one-bot-discord-avatar-label-text-accessories-goggles-transparent-png-857567.png"
       userAvatar="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
       recognitionLang="es"


       steps={[
        {
          id: "1",
          message: `Saludos, en que le puedo ayudar`,
          trigger: "usuario",
        },
        {
          id: "usuario",
          user: true,
          trigger: ({ value }) => Clasificacion(value),
        },
        {
          id: "reservaciones",
          component: <StatusCarta />,
          trigger: "asistente",
        },
        {
          id: "precio-servicios",
          component: <PrecioServicio/>,
          trigger: "asistente",
        },
        {
          id: "comprar",
          component: <CompraProducto />,
          trigger: "asistente",
        },
        {
          id: "no-entiendo",
          message:
            "Disculpe, no le pude entender.",
          trigger: "consultar",
        },
        {
          id: "consultar",
          message:
            "Esto es lo que podemos ofrecerte",
          trigger: "usuario",
        },
        {
          id: "saludo",
          message:
            "Hola, en que puedo ayudar",
          trigger: "usuario",
        },
        {
          id: "sugerencias",
          options: [
            { value: 1, label: "Status de mis compras", trigger: "reservaciones" },
            { value: 2, label: "Precio de los reloj", trigger: "precio-servicios" },
            { value: 3, label: "comprar el producto", trigger: "comprar" },
            { value: 4, label: "¿Deseas algo mas?", trigger: "pregunta" },
          ],
        },
        {
          id: "asistente",
          message: "¿En que otra cosa le puedo ayudar?",
          trigger: "usuario",
        },
        {
          id: "pregunta",
          message: "¿Cual es su pregunta?.",
          trigger: "usuario",
        },
        
        {
          id: "terminar",
          message: "Cuidate mucho.",
          end: true,
        },
      ]}
       {...config}
      />
      </ThemeProvider>
      
    );
  }
       
}

export default SimpleForm;