import {AfterContentInit, Component, ElementRef, ViewChild} from '@angular/core'
import {EditorService} from '../../../../core/services/editor/editor.service'
import {HttpService} from '../../../../core/http/http.service'
import {UtilsService} from '../../../../core/services/information/utils.service'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterContentInit {

  @ViewChild('editor') public editorReference: ElementRef

  constructor (private editorService: EditorService,
               // private route: ActivatedRoute,
               private informationService: UtilsService,
               private httpService: HttpService) {
  }

  public async ngAfterContentInit (): Promise<void> {
    this.editorService.createEditor(this.editorReference.nativeElement)

    this.editorService.addCommand('run-code', {mac: 'cmd-Enter', win: 'ctrl-Enter'}, () => {
      this.editorService.run()
    })

    await this.setCode()

    this.editorReference.nativeElement.onkeyup = () => {
      localStorage.setItem('code', this.editorService.getCode())
    }
  }

  private async setCode () {
    // const key = this.route.snapshot.paramMap.get('key')

    this.editorService.setCode(localStorage.getItem('code') || await this.httpService.getCode())
  }

}
