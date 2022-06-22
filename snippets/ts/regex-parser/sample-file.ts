import * from '.';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @i18n('app', 'Framework name', VERSION.major)
  name: string = ''; // 'Angular ' + VERSION.major;

  @i18n('page.title', 'welcome to this page')
  pageTitle: string = '';

  @i18n('page.pageForm.nameLabel', 'name')
  nameLabel!: string;

  // @i18n('page.pageForm.weightLabel', 'description keep [placeholder:kg] kg', '')
  // @i18n()
  weightLabel!: string;

  ngOnInit() {
    this.setI18n();
  }

  setI18n() {
    this.weightLabel = getI18nText(
      'page.pageForm.weightLabel',
      'Gewicht: [placeholder] kg',
      100
    );
  }
}
