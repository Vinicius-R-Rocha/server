import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.get("/launch", (req, res) => {
  const data = [
    {
      name: "Formigres",
      date: "08 ago 2022",
      amount: "890,00",
      status: true,
    },
    {
      name: "Formigres",
      date: "29 jul 2022",
      amount: "890,00",
      status: false,
    },
    {
      name: "Eternit",
      date: "15 jul 2022",
      amount: "780,00",
      status: true,
    },
    {
      name: "Intercement",
      date: "28 jun 2022",
      amount: "630,00",
      status: true,
    },
  ];
  res.send(data);
});
app.get("/users", (req, res) => {
  const data = [
    {
      name: "Quartzolit",
      title: "Fabricante de argamassas",
    },
    {
      name: "Intercement",
      title: "Fabricante de cimento",
    },
    {
      name: "Tigre",
      title: "Fabricante de tubos e conexões",
    },
    {
      name: "Formigres",
      title: "Fabricante de pisos",
    },
    {
      name: "Eternit",
      title: "Fabricante de telhas",
    },
  ];
  res.send(data);
});
app.get("/pie", (req, res) => {
  const data = [
    {
      name: "Receita",
      value: 216050.00,
      fill: "#0088FE",
      moneyRate: -5.4,
    },
    {
      name: "Venda",
      value: 154415,
      fill: "#00C49F",
      moneyRate: 1.2,
    },
    {
      name: "Lucro",
      value: 73500,
      fill: "#FFBB28",
      moneyRate: 0.8,
    },
  ];
  res.send(data);
});
app.get("/area", (req, res) => {
  const colors = [
    {
      name: "receita",
      fill: "#8884d8",
    },
    {
      name: "venda",
      fill: "#82ca9d",
    },
    {
      name: "lucro",
      fill: "#ffc658",
    },
  ];
  const data = [
    {
      name: "Semana 1",
      receita: 4000,
      venda: 2400,
      lucro: 2400,
    },
    {
      name: "Semana 2",
      receita: 3000,
      venda: 1398,
      lucro: 2210,
    },
    {
      name: "Semana 3",
      receita: 2000,
      venda: 9800,
      lucro: 2290,
    },
    {
      name: "Semana 4",
      receita: 2780,
      venda: 3908,
      lucro: 2000,
    },
  ];
  res.send({
    data,
    colors,
  });
});
app.get("/chart", (req, res) => {
  const data = [
    {
      name: "Jan",
      Saldo: 4000,
    },
    {
      name: "Fev",
      Saldo: 3000,
    },
    {
      name: "Mar",
      Saldo: 2000,
    },
    {
      name: "Abr",
      Saldo: 2780,
    },
    {
      name: "Mai",
      Saldo: 1890,
    },
    {
      name: "Jun",
      Saldo: 2390,
    },
    {
      name: "Jul",
      Saldo: 3490,
    },
    {
      name: "Ago",
      Saldo: 3800,
    },
    {
      name: "Set",
      Saldo: 1000,
    },
    {
      name: "Out",
      Saldo: 5000,
    },
    {
      name: "Nov",
      Saldo: 1800,
    },
    {
      name: "Dez",
      Saldo: 2500,
    },
  ];
  res.send(
    data
  )
});

app.listen(3333, () => {
  console.log("Servidor rodando");
});
