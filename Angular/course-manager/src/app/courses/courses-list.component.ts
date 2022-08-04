import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponents implements OnInit {
    
    filteredCourses: Course[] = [];
    
    _courses: Course[] = [];

    _filterBy!: string;

    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }
    
    ngOnInit(): void { 
        this.retrieveAll();
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error', err)
        });
    }
    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses
            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () =>{
                console.log('Delete with sucess');
                this.retrieveAll();
            },
             error: err => console.log(err)
        })
    }

    set filter(value: string) { 
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() { 
        return this._filterBy;
    }
}