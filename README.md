# Social Assistant for Neurodivergent Young Adults

## Our Team

<table>
    <tbody>
        <tr>
            <td align="center">
                <a href="https://github.com/arhamansari11">
                    <img src="https://avatars.githubusercontent.com/u/124850772?v=4" width="100px;" alt="Muhammad Arham"/>
                    <br />
                    <sub><b>Muhammad Arham</b></sub>
                </a> 
            </td>
            <td align="center">
                <a href="https://github.com/ArefHam">
                    <img src="https://media.licdn.com/dms/image/C4D03AQEwHfmm0YgsAg/profile-displayphoto-shrink_200_200/0/1615415564176?e=1717632000&v=beta&t=1cpduSOL7k4dgM1gye1HKmZmTPSID72_6EFmky0Vnec" width="100px;" alt="Aref Hammadi"/>
                    <br />
                    <sub><b>Aref Hammadi</b></sub>
                </a> 
            </td>
            <td align="center">
          <a href="https://www.linkedin.com/in/monique-h-82b2722/">
                    <img src="https://media.licdn.com/dms/image/D5603AQElz0Eo_i1TJA/profile-displayphoto-shrink_200_200/0/1694144935017?e=1717632000&v=beta&t=sRdaqwm5j-jyYxAhLW0ADUC9HT58E5ieCi-_C5s2taM" width="100px;" alt="Monique Howard "/>
                    <br />
                    <sub><b>Monique Howard </b></sub>
                </a> 
            </td>
          <td align="center">
                <a href="https://github.com/ChiromboKenT">
                    <img src="https://avatars.githubusercontent.com/u/57112312?v=4" width="100px;" alt="Kenny Chirombo"/>
                    <br />
                    <sub><b>Kenny Chirombo</b></sub>
                </a> 
            </td>
          <td align="center">
                <a href="https://github.com/Kiran-shazadi">
                    <img src="https://media.licdn.com/dms/image/D4E03AQHhx3xpDMUUzQ/profile-displayphoto-shrink_800_800/0/1698032502750?e=1717632000&v=beta&t=t5Fs_PIzyyq3E8xkJjNKyj46-UDn-wVflnV3Ox6erjw" width="100px;" alt="Kiran Shahzadi"/>
                    <br />
                    <sub><b>Kiran Shahzadi</b></sub>
                </a> 
            </td>
          <td align="center">
                <a href="https://github.com/MazenMamdouh371">
                    <img src="https://avatars.githubusercontent.com/u/87504568?v=4" width="100px;" alt="Kiran Shahzadi"/>
                    <br />
                    <sub><b>Mazen Mamdouh</b></sub>
                </a> 
            </td>
        </tr> 
</tbody>
<table>

## Summary:

This repository contains the codebase for A digital health assistant that helps young adults diagnosed with neurological disabilities, such as Autism and ADHD, prepare for social encounters when seeking health services. The goal of this application is to help these patient increase their independence, health outcomes, and overall quality of life.

## Key Features:

1. **Interactive Task Creation:** Users can engage with our chat interface to add task to their schedule such as visiting the doctor and picking up a prescription. The chatbot guides the user through task creation using a checklist. Their responses are saved and appended to their tasks.
2. **Conversation Practice Modules:** A voice feature allows users to practice oral communication skills by interacting with the app using spoken language. This module includes scenarios for scheduling appointments, checking in at the doctor’s office, attending a virtual visit, and more..

3. **Scenario-Based Learning:** Users can access a wide array of videos and interactive exercises aimed at helping them develop practical skills for independently navigating everyday situations.

4. **Domain-Specific Personalization:** Leveraging machine learning techniques like Retrieval-Augmented Generation (RAG), the app offers improved information retrieval and neuro-sensitive natural language generation, ensuring more accurate and personalized assistance.

## Running The Project:

You need to make sure you have npm and python installed.
Now first, you gotta run the Django backend, to do this execute these commands (optional but better, do the steps in a virtual environment):
`cd backend`
`pip install -r requirements. txt`
`python manage.py migrate`
`python manage.py runserver`

Now Django is running!
However, you still need to run React, to do this, execute these commands in another window:
`cd..` -- This is to go back to the main directory, if you are in the backend directory
`cd frontend`
`cd hackathon-app`
`npm i`
`npm run dev`

And that's it, now you have both Django and React running!
Go to the local url that appears in the window after running React to access the website

**Note: Make sure Django and React are running on different ports!**
