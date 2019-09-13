const storage = window.localStorage

const renderContacts = () => {
  const contacts = JSON.parse(storage.getItem('contacts'))
  let div = document.querySelector('#contact-list')
  if (contacts) {
    div.innerHTML = ''
   contacts.forEach(contact => {
      let li = document.createElement('div')
      li.innerHTML = `
  <div class="ui column">
        <div class="ui card">
            <div class="image"><img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg"></div>
          <div class="content">
            <h3>${ contact.name }</h3>
            <div class="description">
              <p>${ contact.notes }</p>    
              <p class="company"><i class="briefcase icon"></i>${ contact.company }</p>
            </div>
          </div>
          <div class="extra content">
            <p><i class="phone icon"></i>${ contact.phone }</p>
            <p><i class="mail icon"></i>${ contact.email }</p>
            <p><i class="twitter icon"></i><a href="https://www.twitter.com/${contact.twitter}">@${contact.twitter}</a></p>
          </div>
        </div>
        <button onClick="this.parentNode.parentNode.removeChild(this.parentNode); localStorage.removeItem('contacts');" class="delete-this-contact">Delete this contact</button>
  </div>
`
      div.appendChild(li)  
    })
  } else {
    div.innerHTML = '<p>You haven\'t added any contacts yet.</p>'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderContacts()  
  const addContactForm = document.querySelector('#new-contact-form')
    addContactForm.addEventListener('submit', event => {
      event.preventDefault()
  
      const {
        name,
        email,
        phone,
        company,
        notes,
        twitter,
      } = addContactForm.elements
  
      const contact = {
        id: Date.now(),
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        notes: notes.value,
        twitter: twitter.value,
      }

      console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
        let contacts = JSON.parse(storage.getItem('contacts')) || []
        contacts.push(contact)
        storage.setItem('contacts', JSON.stringify(contacts))
      renderContacts()
      addContactForm.reset() 
  })

})

let removeme = storage.setItem('removeme', JSON.stringify(contacts));