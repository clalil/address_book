const storage = window.localStorage

const renderContacts = () => {
  const contacts = JSON.parse(storage.getItem('contacts'))
  let div = document.querySelector('#contact-list')
  if (contacts) {
    div.innerHTML = ''
    const ul = document.createElement('div')

   contacts.forEach(contact => {
      let li = document.createElement('div')
      li.innerHTML = 
      `
<div class="ui grid">
  <div class="four wide column">
        <div class="ui card">
          <div class="image">
            <img src="https://semantic-ui.com/images/avatar/large/daniel.jpg">
          </div>
          <div class="content">
            <a class="header">${ contact.name }</a>
            <div class="meta">
              <span class="date">Joined in 2013</span>
            </div>
            <div class="description">
            <h2>${ contact.company }</h2>
                <p>${ contact.notes }</p>
                <p>${ contact.email } |
                <a href="https://www.twitter.com/${contact.twitter}">@${contact.twitter}</a></p>
            </div>
          </div>
          <div class="extra content">
              <a>
                <i class="user icon"></i>
                22 Friends
              </a>
            </div>
        </div>
  </div>
</div>
`

  // <div class="four wide column"></div>
  // <div class="four wide column"></div> 
      // <div class="card">
      //   <div class="image">
      //     <img src="https://ca-address-book.herokuapp.com/images/pine.jpg" />
      //   </div>
      //   <div class="content">
      //     <h1>${ contact.name }</h1>
      //     <h2>${ contact.company }</h2>
      //     <p>${ contact.notes }</p>
      //     <p>${ contact.email } |
      //     <a href="https://www.twitter.com/${contact.twitter}">@${contact.twitter}</a></p>
      //   < /div>
      // </div>

      ul.appendChild(li)  
    })
    div.appendChild(ul)
  } else {
    div.innerHTML = '<p>These are not the contacts you are looking for</p>'
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
      addContactForm.reset() //this resets the form after the first contact has been added - without this, it only adds one contact cause it adds the info of both contacts at the same time.
  })
})