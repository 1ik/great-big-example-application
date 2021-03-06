import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactPage } from './contact.page';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '', component: ContactPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.contact.home.title',
            source: 'https://angular.io/resources/live-examples/ngmodule/ts/plnkr.html',
            tags: ['forms']
        },
        canActivate: [UserRouteAccessService]
    }
];

export const routedComponents = [ContactPage];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRouting { }
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
