import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
import { Color, Label , SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-admin-demo',
  templateUrl: './admin-demo.component.html',
  styleUrls: ['./admin-demo.component.scss']
})
export class AdminDemoComponent implements OnInit {

  // Wave Chart
  public lineChartData: ChartDataSets[] = [
    { data: [55, 65, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [70, 60, 71, 55, 56, 62, 75], label: 'Series B' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#0984e3',
      backgroundColor: 'rgba(9, 132, 227,0.5)',
    },
    {
      borderColor: '#00cec9',
      backgroundColor: 'rgba(0, 206, 201,0.5)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  // Pie Chart
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(9, 132, 227,0.4)', 'rgba(0, 206, 201,0.4)', 'rgba(0, 184, 148,0.4)'],
    },
  ];
 
  // Bar Chart
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public barChartColors = [
    {
      backgroundColor: ['rgba(9, 132, 227,0.4)', 'rgba(0, 206, 201,0.4)', 'rgba(0, 184, 148,0.4)'],
    },
  ];

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: ChartType = 'radar';
  public radarChartColors = [
    {
      backgroundColor: ['rgba(9, 132, 227,0.4)', 'rgba(0, 206, 201,0.4)', 'rgba(0, 184, 148,0.4)'],
    },
  ];

  // Polar
  public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
  public polarChartColors = [
    {
      backgroundColor: ['rgba(9, 132, 227,0.4)', 'rgba(0, 206, 201,0.4)', 'rgba(0, 184, 148,0.4)', 'rgba(15, 188, 249,0.4)'],
    },
  ];

  // scatter
  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3, r: 20 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';
  public scatterChartColors = [
    {
      backgroundColor: ['rgba(9, 132, 227,0.4)', 'rgba(0, 206, 201,0.4)', 'rgba(0, 184, 148,0.4)', 'rgba(15, 188, 249,0.4)'],
    },
  ];

  // Date
  date: number;
  day: string;
  month: string;

  constructor() { 
    // Pie
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {

    $('#menu-action').click(function() {
      $('.sidebar').toggleClass('active');
      $('.main').toggleClass('active');
      $(this).toggleClass('active');
    
      if ($('.sidebar').hasClass('active')) {
        $(this).find('i').addClass('fa-close');
        $(this).find('i').removeClass('fa-bars');
      } else {
        $(this).find('i').addClass('fa-bars');
        $(this).find('i').removeClass('fa-close');
      }
    });
    
    // Add hover feedback on menu
    $('#menu-action').hover(function() {
        $('.sidebar').toggleClass('hovered');
    });

    // Email 
    $('.email').on("change keyup paste",
    function(){
        if($(this).val()){
          $('.icon-paper-plane').addClass("next");
        } else {
          $('.icon-paper-plane').removeClass("next");
        }
      }
    );

    $('.next-button').hover(
      function(){
        $(this).css('cursor', 'pointer');
      }
    );

    $('.next-button.email').click(
      function(){
        console.log("Something");
        $('.email-section').addClass("fold-up");
        $('.password-section').removeClass("folded");
      }
    );

    $('.password').on("change keyup paste",
      function(){
        if($(this).val()){
          $('.icon-lock').addClass("next");
        } else {
          $('.icon-lock').removeClass("next");
        }
      }
    );

    $('.next-button').hover(
      function(){
        $(this).css('cursor', 'pointer');
      }
    );

    $('.next-button.password').click(
      function(){
        console.log("Something");
        $('.password-section').addClass("fold-up");
        $('.repeat-password-section').removeClass("folded");
      }
    );

    $('.repeat-password').on("change keyup paste",
      function(){
        if($(this).val()){
          $('.icon-repeat-lock').addClass("next");
        } else {
          $('.icon-repeat-lock').removeClass("next");
        }
      }
    );

    $('.next-button.repeat-password').click(
      function(){
        console.log("Something");
        $('.repeat-password-section').addClass("fold-up");
        $('.success').css("marginTop", 0);
      }
    );

    // Calendar
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    this.month = date.toLocaleString('default', { month: 'long' });
    this.day = days[date.getDay()];
    this.date = date.getDate();

  }
}
