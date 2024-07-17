import Handlebars from 'handlebars'
import { Input } from '../../components/input/input.ts'
import { Title } from '../../components/title/title.ts'
import { Button } from '../../components/button/button.ts'
import { Link } from '../../components/link/link.ts'

import ProfileForm from './profile.hbs?raw'

interface Profile {
    login: string,
    password: string,
    email: string,
    first_name: string,
    surname: string,
    chat_name: string,
    phone: string,
    avatar: string,
}

export const profile: Profile = {
    login: '',
    password: '',
    first_name: '',
    surname: '',
    chat_name: '',
    email: '',
    phone: '',
    avatar: '',
}

export enum InputUserFileId {
    login = '#login_input',
    password = '#password_input',
    first_name = '#first_name_input',
    surname = '#surname_input_input',
    chat_name = '#chat_name_input',
    email = '#email_input',
    phone = '#phone_input',
    avatar = '#avatar_input',
}


const profileFiled = function (e: Event, field: keyof typeof profile) {
    console.log(field, (e.target as HTMLInputElement)?.value)
    profile[field] = (e.target as HTMLInputElement)?.value
}

Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Title', Title);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Link', Link);


const template = Handlebars.compile(ProfileForm)

const profileForm = (profile: Profile) => template(profile)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = profileForm({...profile})

const inputAvatar = document.querySelector<HTMLDivElement>(InputUserFileId.avatar)
const inputLogin = document.querySelector<HTMLDivElement>(InputUserFileId.login)
const inputPassword = document.querySelector<HTMLDivElement>(InputUserFileId.password)
const inputEmail = document.querySelector<HTMLDivElement>(InputUserFileId.email)
const inputFirstName = document.querySelector<HTMLDivElement>(InputUserFileId.first_name)
const inputSecondName = document.querySelector<HTMLDivElement>(InputUserFileId.surname)
const inputDisplayName = document.querySelector<HTMLDivElement>(InputUserFileId.chat_name)
const inputPhone = document.querySelector<HTMLDivElement>(InputUserFileId.phone)

inputAvatar?.addEventListener('input', (e) => profileFiled(e, 'avatar'))
inputLogin?.addEventListener('input', (e) => profileFiled(e, 'login'))
inputPassword?.addEventListener('input', (e) => profileFiled(e, 'password'))
inputEmail?.addEventListener('input', (e) => profileFiled(e, 'email'))
inputFirstName?.addEventListener('input', (e) => profileFiled(e, 'first_name'))
inputSecondName?.addEventListener('input', (e) => profileFiled(e, 'surname'))
inputDisplayName?.addEventListener('input', (e) => profileFiled(e, 'chat_name'))
inputPhone?.addEventListener('input', (e) => profileFiled(e, 'phone'))
export default profileForm