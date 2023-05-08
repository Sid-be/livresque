import { BooksService } from './books.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { HomeComponent } from './home/home.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { DialogComponent } from './dialog/dialog.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { BooklistComponent } from './booklist/booklist.component';
import { EditComponent } from './edit/edit.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { GenreComponent } from './genre/genre.component';
import { FavorisComponent } from './favoris/favoris.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { AutoAnimateModule } from '@formkit/auto-animate/angular';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifiyEmailComponent } from './verifiy-email/verifiy-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthServiceService } from './auth-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';



const AllMaterialModules=[
  MatAutocompleteModule,
  MatCheckboxModule,
 
  MatNativeDateModule,
  MatInputModule,
  MatDatepickerModule,
  MatRadioModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRippleModule,
  MatBottomSheetModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
];

@NgModule({
  declarations: [
    
    AppComponent,
    NavTopComponent,
    HomeComponent,
    LeftNavComponent,
    DialogComponent,
    AddbookComponent,
    BooklistComponent,
    EditComponent,
    GenreComponent,
    FavorisComponent,
    SignInComponent,
    SignUpComponent,
    VerifiyEmailComponent,
    ForgotPasswordComponent
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LottieAnimationViewModule.forRoot(),
    FlexLayoutModule,
    AllMaterialModules,
   
    FormsModule,
    ReactiveFormsModule,
    
   
  ],
  exports: [AllMaterialModules],
  providers: [BooksService, AuthServiceService,
    {provide: MAT_DATE_LOCALE,useValue: 'fr-FR',},
    {provide:HTTP_INTERCEPTORS, 
    useClass: InterceptorService,
    multi: true
  }
  ],
    
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
