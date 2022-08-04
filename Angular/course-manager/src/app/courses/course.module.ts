import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponents } from "./courses-list.component";


@NgModule({
    declarations: [
        CourseListComponents,
        CourseInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponents
            },
            {
                path: 'course/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule {

}