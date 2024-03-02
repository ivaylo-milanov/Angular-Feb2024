import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticlesComponent
  ]
})
export class ArticlesModule { }
