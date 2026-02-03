import { AppData } from '../types';

export const appData: AppData = {
  "configuration": {
    "site_name": "Jass Cakes Confeitaria",
    "site_phone": 5531983622642,
    "site_instagram": "@jasscakesbh",
    "our_structure": "Todos os nossos bolos possuem 3 discos de massa e 2 camadas de recheio.",
    "how_works": {
      "1": "Recheios Simples (Valor base): Ninho, Prestígio ou Brigadeiros (ao leite, meio amargo, branco ou Nesquik).",
      "2": "Acréscimos: Personalize com Frutas, Nutella, Castanhas, Amêndoas ou Geleias.",
      "3": "Se o que você busca não está no cardápio, mande uma mensagem! Fazemos orçamentos personalizados para realizar seu desejo"
    }
  },
  "products": [
    {
      "name": "bolos",
      "description": "Massas em baunilha e cacau 50%",
      "items": [
        {
          "tamanho_aro": 15,
          "capacidade_aproximada": "Serve aproximadamente 10 a 15 pessoas.",
          "peso_aproximado": "1 kg — 1,5 kg",
          "preco": 155.0
        },
        {
          "tamanho_aro": 20,
          "capacidade_aproximada": "Serve aproximadamente 20 a 25 pessoas.",
          "peso_aproximado": "2 kg — 2,5 kg",
          "preco": 185.0
        },
        {
          "tamanho_aro": 23,
          "capacidade_aproximada": "Serve aproximadamente 30 a 35 pessoas.",
          "peso_aproximado": "3 kg — 3,5 kg",
          "preco": 215.0
        },
        {
          "tamanho_aro": 25,
          "capacidade_aproximada": "Serve aproximadamente 40 a 45 pessoas.",
          "peso_aproximado": "4 kg — 4,5 kg",
          "preco": 250.0
        },
        {
          "tamanho_aro": 30,
          "capacidade_aproximada": "Serve aproximadamente 50 a 60 pessoas.",
          "peso_aproximado": "6 kg — 7,5 kg",
          "preco": 325.0
        },
        {
          "tamanho_aro": 35,
          "capacidade_aproximada": "Serve aproximadamente 80 a 90 pessoas.",
          "peso_aproximado": "8,5 kg — 10 kg",
          "preco": 385.0
        }
      ]
    },
    {
      "name": "acrescimos",
      "description": "",
      "items": [
        {
          "acrescimo": "Morango Fresco",
          "preco": 0, // Placeholder as price is in table
          "tabela_valores": [
            { "tamanho_aro": 15, "preco": 15.0 },
            { "tamanho_aro": 20, "preco": 30.0 },
            { "tamanho_aro": 23, "preco": 40.0 },
            { "tamanho_aro": 25, "preco": 45.0 },
            { "tamanho_aro": 30, "preco": 50.0 },
            { "tamanho_aro": 35, "preco": 60.0 }
          ]
        },
        {
          "acrescimo": "Geleia de Morango",
          "preco": 0,
          "tabela_valores": [
            { "tamanho_aro": 15, "preco": 10.0 },
            { "tamanho_aro": 20, "preco": 20.0 },
            { "tamanho_aro": 23, "preco": 30.0 },
            { "tamanho_aro": 25, "preco": 35.0 },
            { "tamanho_aro": 30, "preco": 40.0 },
            { "tamanho_aro": 35, "preco": 45.0 }
          ]
        },
        {
          "acrescimo": "Nutella (Creme de Avelã)",
          "preco": 0,
          "tabela_valores": [
            { "tamanho_aro": 15, "preco": 25.0 },
            { "tamanho_aro": 20, "preco": 40.0 },
            { "tamanho_aro": 23, "preco": 55.0 },
            { "tamanho_aro": 25, "preco": 65.0 },
            { "tamanho_aro": 30, "preco": 90.0 },
            { "tamanho_aro": 35, "preco": 120.0 }
          ]
        },
        {
          "acrescimo": "Mousse de Nutella",
          "preco": 0,
          "tabela_valores": [
            { "tamanho_aro": 15, "preco": 20.0 },
            { "tamanho_aro": 20, "preco": 30.0 },
            { "tamanho_aro": 23, "preco": 40.0 },
            { "tamanho_aro": 25, "preco": 45.0 },
            { "tamanho_aro": 30, "preco": 60.0 },
            { "tamanho_aro": 35, "preco": 80.0 }
          ]
        },
        {
          "acrescimo": "Uva Verde",
          "preco": 0,
          "tabela_valores": [
            { "tamanho_aro": 15, "preco": 15.0 },
            { "tamanho_aro": 20, "preco": 30.0 },
            { "tamanho_aro": 23, "preco": 45.0 },
            { "tamanho_aro": 25, "preco": 60.0 },
            { "tamanho_aro": 30, "preco": 75.0 },
            { "tamanho_aro": 35, "preco": 95.0 }
          ]
        },
        {
          "acrescimo": "Amendoim",
          "preco": 0,
          "tabela_valores": [
            { "tamanho_aro": 15, "preco": 15.0 },
            { "tamanho_aro": 20, "preco": 30.0 },
            { "tamanho_aro": 23, "preco": 45.0 },
            { "tamanho_aro": 25, "preco": 60.0 },
            { "tamanho_aro": 30, "preco": 75.0 },
            { "tamanho_aro": 35, "preco": 95.0 }
          ]
        },
        {
          "acrescimo": "Castanhas",
          "preco": 0,
          "tabela_valores": [
            { "tamanho_aro": 15, "preco": 15.0 },
            { "tamanho_aro": 20, "preco": 30.0 },
            { "tamanho_aro": 23, "preco": 45.0 },
            { "tamanho_aro": 25, "preco": 60.0 },
            { "tamanho_aro": 30, "preco": 75.0 },
            { "tamanho_aro": 35, "preco": 95.0 }
          ]
        }
      ]
    },
    {
      "name": "Coberturas",
      "description": "Chantininho já incluso",
      "items": [
        {
          "cobertura": "Ganache Chocolate Branco",
          "preco": 0,
          "tabela_valores": [
            { "tamanho_aro": 15, "preco": 30.0 },
            { "tamanho_aro": 20, "preco": 45.0 },
            { "tamanho_aro": 23, "preco": 60.0 },
            { "tamanho_aro": 25, "preco": 75.0 },
            { "tamanho_aro": 30, "preco": 90.0 },
            { "tamanho_aro": 35, "preco": 105.0 }
          ]
        },
        {
          "cobertura": "Ganache Chocolate ao Leite",
          "preco": 0,
          "tabela_valores": [
            { "tamanho_aro": 15, "preco": 25.0 },
            { "tamanho_aro": 20, "preco": 40.0 },
            { "tamanho_aro": 23, "preco": 55.0 },
            { "tamanho_aro": 25, "preco": 70.0 },
            { "tamanho_aro": 30, "preco": 85.0 },
            { "tamanho_aro": 35, "preco": 100.0 }
          ]
        }
      ]
    },
    {
      "name": "Doces",
      "description": "01 tipo a cada 25 unidades",
      "items": [
        { "doce": "Brigadeiro ao Leite", "quantidade": 25, "preco": 40.0 },
        { "doce": "Brigadeiro ao Leite", "quantidade": 50, "preco": 80.0 },
        { "doce": "Brigadeiro ao Leite", "quantidade": 75, "preco": 110.0 },
        { "doce": "Brigadeiro ao Leite", "quantidade": 100, "preco": 130.0 },
        { "doce": "Brigadeiro ao Leite", "quantidade": 150, "preco": 190.0 },
        { "doce": "Brigadeiro ao Leite", "quantidade": 200, "preco": 220.0 },
        { "doce": "Brigadeiro de Amendoim", "quantidade": 25, "preco": 40.0 },
        { "doce": "Brigadeiro de Amendoim", "quantidade": 50, "preco": 80.0 },
        { "doce": "Brigadeiro de Amendoim", "quantidade": 75, "preco": 110.0 },
        { "doce": "Brigadeiro de Amendoim", "quantidade": 100, "preco": 130.0 },
        { "doce": "Brigadeiro de Amendoim", "quantidade": 150, "preco": 190.0 },
        { "doce": "Brigadeiro de Amendoim", "quantidade": 200, "preco": 220.0 },
        { "doce": "Prestígio", "quantidade": 25, "preco": 40.0 },
        { "doce": "Prestígio", "quantidade": 50, "preco": 80.0 },
        { "doce": "Prestígio", "quantidade": 75, "preco": 110.0 },
        { "doce": "Prestígio", "quantidade": 100, "preco": 130.0 },
        { "doce": "Prestígio", "quantidade": 150, "preco": 190.0 },
        { "doce": "Prestígio", "quantidade": 200, "preco": 220.0 },
        { "doce": "Beijinho", "quantidade": 25, "preco": 40.0 },
        { "doce": "Beijinho", "quantidade": 50, "preco": 80.0 },
        { "doce": "Beijinho", "quantidade": 75, "preco": 110.0 },
        { "doce": "Beijinho", "quantidade": 100, "preco": 130.0 },
        { "doce": "Beijinho", "quantidade": 150, "preco": 190.0 },
        { "doce": "Beijinho", "quantidade": 200, "preco": 220.0 },
        { "doce": "Ninho Colorido", "quantidade": 25, "preco": 40.0 },
        { "doce": "Ninho Colorido", "quantidade": 50, "preco": 80.0 },
        { "doce": "Ninho Colorido", "quantidade": 75, "preco": 110.0 },
        { "doce": "Ninho Colorido", "quantidade": 100, "preco": 130.0 },
        { "doce": "Ninho Colorido", "quantidade": 150, "preco": 190.0 },
        { "doce": "Ninho Colorido", "quantidade": 200, "preco": 220.0 },
        { "doce": "Brigadeiro Meio Amargo", "quantidade": 25, "preco": 40.0 },
        { "doce": "Brigadeiro Meio Amargo", "quantidade": 50, "preco": 80.0 },
        { "doce": "Brigadeiro Meio Amargo", "quantidade": 75, "preco": 110.0 },
        { "doce": "Brigadeiro Meio Amargo", "quantidade": 100, "preco": 130.0 },
        { "doce": "Brigadeiro Meio Amargo", "quantidade": 150, "preco": 190.0 },
        { "doce": "Brigadeiro Meio Amargo", "quantidade": 200, "preco": 220.0 },
        { "doce": "Brigadeiro Branco", "quantidade": 25, "preco": 40.0 },
        { "doce": "Brigadeiro Branco", "quantidade": 50, "preco": 80.0 },
        { "doce": "Brigadeiro Branco", "quantidade": 75, "preco": 110.0 },
        { "doce": "Brigadeiro Branco", "quantidade": 100, "preco": 130.0 },
        { "doce": "Brigadeiro Branco", "quantidade": 150, "preco": 190.0 },
        { "doce": "Brigadeiro Branco", "quantidade": 200, "preco": 220.0 },
        { "doce": "Bicho de Pé", "quantidade": 25, "preco": 40.0 },
        { "doce": "Bicho de Pé", "quantidade": 50, "preco": 80.0 },
        { "doce": "Bicho de Pé", "quantidade": 75, "preco": 110.0 },
        { "doce": "Bicho de Pé", "quantidade": 100, "preco": 130.0 },
        { "doce": "Bicho de Pé", "quantidade": 150, "preco": 190.0 },
        { "doce": "Bicho de Pé", "quantidade": 200, "preco": 220.0 },
        { "doce": "Ninho", "quantidade": 25, "preco": 40.0 },
        { "doce": "Ninho", "quantidade": 50, "preco": 80.0 },
        { "doce": "Ninho", "quantidade": 75, "preco": 110.0 },
        { "doce": "Ninho", "quantidade": 100, "preco": 130.0 },
        { "doce": "Ninho", "quantidade": 150, "preco": 190.0 },
        { "doce": "Ninho", "quantidade": 200, "preco": 220.0 }
      ]
    },
    {
      "name": "Mini Cupcakes",
      "description": "Recheios: Brigadeiro, Nutella (Creme de Avelã) ou Ninho",
      "items": [
        { "quantidade": 1, "preco": 3.0, "preco_recheado": 4.0 },
        { "quantidade": 21, "preco": 60.0, "preco_recheado": 80.0 },
        { "quantidade": 42, "preco": 110.0, "preco_recheado": 150.0 }
      ]
    },
    {
      "name": "Tags",
      "description": "",
      "items": [
        { "quantidade": 1, "preco": 1.3 },
        { "quantidade": 5, "preco": 6.5 },
        { "quantidade": 10, "preco": 13 },
        { "quantidade": 21, "preco": 27.3 },
        { "quantidade": 30, "preco": 37 },
        { "quantidade": 42, "preco": 50.6 }
      ]
    }
  ]
};
