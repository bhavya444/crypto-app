const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const axios =require('axios')
const ipc=electron.ipcRenderer
const notifyBtn= document.getElementById('notifyBtn')
var price=document.querySelector('h1')
var targetPrice= document.getElementById('targetPrice')
var targetPriceVal



function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
 
     .then (res => {
         const cryptos =res.data.BTC.USD
         price.innerHTML ='$' + cryptos.toLocaleString('en')
       
           
        })
}
getBTC();
setInterval(getBTC,10000);

function getBTCC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=EUR')
     .then (res => {
         const cryptos =res.data.BTC.EUR
         price1.innerHTML ='€' + cryptos.toLocaleString('en')
           
        })
}
getBTCC();
setInterval(getBTCC,10000);

function getETH() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD')
     .then (res => {
         const cryptos =res.data.ETH.USD
         price2.innerHTML ='$' + cryptos.toLocaleString('en')
           
        })
}
getETH();
setInterval(getETH,10000);

function getETHH() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=EUR')
     .then (res => {
         const cryptos =res.data.ETH.EUR
         price3.innerHTML ='€' + cryptos.toLocaleString('en')
           
        })
}
getETHH();
setInterval(getETHH,10000);

function getDASH() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=DASH&tsyms=USD')
     .then (res => {
         const cryptos =res.data.DASH.USD
         price4.innerHTML ='$' + cryptos.toLocaleString('en')
           
        })
}
getDASH();
setInterval(getDASH,10000);

function getDASH1() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=DASH&tsyms=EUR')
     .then (res => {
         const cryptos =res.data.DASH.EUR
         price5.innerHTML ='€' + cryptos.toLocaleString('en')
           
        })
}
getDASH1();
setInterval(getDASH1,10000);