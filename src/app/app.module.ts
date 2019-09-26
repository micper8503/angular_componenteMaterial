import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MovieService } from './service/movie.service';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { MaterialModule} from './material.module';
import { HttpClientModule} from '@angular/common/http';
import { MatInputModule} from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { MatOptionModule} from '@angular/material';
import { MatTreeModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TeacherListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MaterialModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTreeModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
