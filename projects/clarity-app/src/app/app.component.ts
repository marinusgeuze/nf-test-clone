import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClarityModule } from "@clr/angular";

@Component({
  selector: 'app-root',
  imports: [ClarityModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clarity-app';
  private http = inject(HttpClient);
  apiData: any = null;
  loading = false;

  fetchData() {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe({
      next: (data) => {
        this.apiData = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    });
  }
}

export default AppComponent;
