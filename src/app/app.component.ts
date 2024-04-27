import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FormsModule, TodoComponent,HeaderComponent,FooterComponent]
})
export class AppComponent {
  title = 'todo';
}
