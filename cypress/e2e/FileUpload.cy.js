require('cypress-file-upload')

describe('file upload', ()=>{
    it('attache file upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({ filePath: 'LOVE.xlsx', fileName: 'customFileName' })
        //cy.get('#file-upload').attachFile('LOVE.xlsx')
        cy.get('#file-submit').click()
        cy.get('div#content > div > h3').should('have.text', 'File Uploaded!')
        cy.get('#uploaded-files').contains('customFileName').should('be.visible')
    })
    it('drag and drop file upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('LOVE.xlsx', { subjectType: 'drag-n-drop' })
        cy.get('div.dz-filename > span')
        .should('be.visible')
        
    })
    it.only('drag and drop file upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['LOVE.xlsx', 'Track_Id_Sheet.xlsx'])
        cy.get('ul#fileList')
        .contains('LOVE.xlsx').should('be.visible')
        
    })
})