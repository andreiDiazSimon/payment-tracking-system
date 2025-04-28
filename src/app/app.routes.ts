import { Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ViewPaymentHistoryComponent } from './components/view-payment-history/view-payment-history.component';
import { MakeTransactionComponent } from './components/make-transaction/make-transaction.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
 {
    path: 'admin',
    component: AdminComponent,
  },
      {
        path: 'add-student',
        component: AddStudentComponent,
      },
      {
        path: 'view-payment-history',
        component: ViewPaymentHistoryComponent,
      },
      {
        path: 'make-transaction',
       component: MakeTransactionComponent,
      },
];
