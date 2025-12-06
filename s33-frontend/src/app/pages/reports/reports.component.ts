import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.component.html'
})
export class ReportsComponent implements AfterViewInit {

  @ViewChild('chart2') chartRef!: ElementRef<HTMLCanvasElement>;

  explanation = `
    This chart highlights additional metrics extracted from the Generative AI analysis article.
  `;

  constructor(private api: ApiService) {}

  ngAfterViewInit(): void {
    const token = localStorage.getItem('token') ?? '';

    this.api.getChart2(token).subscribe((data: any) => {   // 🔥 FIXED
      new Chart(this.chartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Performance Score',
              data: data.values,
              borderWidth: 2,
              backgroundColor: 'rgba(99, 102, 241, 0.6)',
              borderColor: '#6366f1'
            }
          ]
        }
      });
    });
  }
}
