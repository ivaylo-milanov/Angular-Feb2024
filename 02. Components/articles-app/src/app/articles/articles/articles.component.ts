import { Component, OnInit, Output } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleData } from '../../data/data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleData: ArticleData) {}

  ngOnInit(): void {
    this.articles = this.articleData.getData();
  }
}
