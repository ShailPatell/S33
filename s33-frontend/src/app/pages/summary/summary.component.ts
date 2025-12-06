import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-summary',
  standalone: true,
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements AfterViewInit {
  @ViewChild('chart1') chartRef!: ElementRef<HTMLCanvasElement>;

  explanation = `
    This chart illustrates important trends based on recent Generative AI innovations.
  `;

  constructor(private api: ApiService) {}

  ngAfterViewInit(): void {
    const token = localStorage.getItem('token') ?? '';

    this.api.getChart1(token).subscribe((data: any) => {   // 🔥 typed as ANY
      new Chart(this.chartRef.nativeElement, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Adoption (%)',
              data: data.values,
              borderWidth: 2,
              borderColor: '#4f46e5',
              backgroundColor: 'rgba(79, 70, 229, 0.2)'
            }
          ]
        }
      });
    });
  }
}
