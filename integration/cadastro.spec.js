import signup from '../pages/SignupPage'

describe('Cadastro', () => {

    

    it('Usuario deve se tornar um entregador', () => {
        var deliver = {
            name: 'Kevin Silva',
            cpf: '10210210456',
            email: 'kevin.mss@hotmail.com',
            whatsapp: '11941293941',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Apt 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_metodo: 'Moto',
            cnh: 'cnh-digital.jpg'

        }

        

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectMessage)

    })

    it('CPF incorreto', () => {


        var deliver = {
            name: 'Kevin Silva',
            cpf: '102102104AA',
            email: 'kevin.mss@hotmail.com',
            whatsapp: '11941293941',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Apt 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_metodo: 'Moto',
            cnh: 'cnh-digital.jpg'

        }

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })
})