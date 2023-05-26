import './App.css';

import { useState } from 'react';
import { FormsEnum, PagesEnum } from './Enums/Enums';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainSection from './Components/Pages/MainPage/MainSection/MainSection';
import SecondSection from './Components/Pages/MainPage/SecondSection/SecondSection';
import PayPointsSection from './Components/Pages/MainPage/PayPointsSection/PayPointsSection';
import MapsAndDetectorsSection from './Components/Pages/MainPage/MapsAndDetectorsSection/MapsAndDetectorsSection';
import ToolsSection from './Components/Pages/MainPage/ToolsSection/ToolsSection';
import AdditionalInfoSection from './Components/Pages/MainPage/AdditionalInfoSection/AdditionalInfoSection';
import NewsSection from './Components/Pages/NewsPage/NewsSection/NewsSection';
import FAQSection from './Components/Pages/FAQPage/FAQSection/FAQSection';
import QuestionForm from './Components/Pages/FormPage/Forms/QuestionForm/QuestionForm';
import AboutMainSection from './Components/Pages/AboutPage/AboutMainSection/AboutMainSection';
import ContactInfoSection from './Components/Pages/AboutPage/ContactInfoSection/ContactInfoSection';
import CertificatesSection from './Components/Pages/AboutPage/CertificatesSection/CertificatesSection';
import PaymentMainSection from './Components/Pages/PaymentPage/PaymentMainSection/PaymentMainSection';
import StepsSection from './Components/Pages/PaymentPage/StepsSection/StepsSection';
import SubscriptionSection from './Components/Pages/PaymentPage/SubscriptionSection/SubscriptionSection';
import FinePaySection from './Components/Pages/PaymentPage/FinePaySection/FinePaySection';
import CharityMainSection from './Components/Pages/CharityPage/CharityMainSection/CharityMainSection';
import CounterSection from './Components/Pages/CharityPage/CounterSection/CounterSection';
import EventsSection from './Components/Pages/CharityPage/EventsSection/EventsSection';
import BenefactorsSection from './Components/Pages/CharityPage/BenefactorsSection/BenefactorsSection';
import FormSection from './Components/Pages/FormPage/FormSection/FormSection';
import DonateForm from './Components/Pages/FormPage/Forms/DonateForm/DonateForm';
import CarNumberForm from './Components/Pages/FormPage/Forms/CarNumberForm/CarNumberForm';
import AuthSection from './Components/Pages/AuthPage/AuthSection';
import AdminPage from './Components/Pages/AdminPage/AdminPage';

function App() {
  const [page, setPage] = useState<PagesEnum>(PagesEnum.Home)
  const [isForm, setIsForm] = useState<boolean>(false);
  const [form, setForm] = useState<FormsEnum>(FormsEnum.CarNumber);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  function changePage(page: PagesEnum) {
    setPage(page);
  }

  function changeForm(form: FormsEnum) {
    setForm(form)
  }

  function changeIsForm(isForm: boolean) {
    setIsForm(isForm);
  }

  function changeIsAuthorized(isAuthorized: boolean) {
    setIsAuthorized(isAuthorized)
  }

  return (
    <>
      <Header isAuthorized={isAuthorized} changeIsAuthorized={changeIsAuthorized} changePage={changePage} changeForm={changeForm} changeIsForm={changeIsForm}></Header>
      <main>
        {page === PagesEnum.Home &&
          <>
            <MainSection changeForm={changeForm} changeIsForm={changeIsForm}></MainSection>
            <SecondSection></SecondSection>
            <PayPointsSection></PayPointsSection>
            <MapsAndDetectorsSection></MapsAndDetectorsSection>
            <ToolsSection></ToolsSection>
            <AdditionalInfoSection></AdditionalInfoSection>
          </>
        }
        {page === PagesEnum.About &&
          <>
            <AboutMainSection></AboutMainSection>
            <ContactInfoSection></ContactInfoSection>
            <CertificatesSection></CertificatesSection>
          </>
        }
        {page === PagesEnum.News &&
          <NewsSection></NewsSection>
        }
        {page === PagesEnum.Payment &&
          <>
            <PaymentMainSection></PaymentMainSection>
            <StepsSection></StepsSection>
            <SubscriptionSection></SubscriptionSection>
            <FinePaySection></FinePaySection>
          </>
        }
        {page === PagesEnum.FAQ &&
          <FAQSection changeForm={changeForm} changeIsForm={changeIsForm}></FAQSection>
        }
        {page === PagesEnum.Charity &&
          <>
            <CharityMainSection></CharityMainSection>
            <CounterSection></CounterSection>
            <EventsSection></EventsSection>
            <BenefactorsSection changeForm={changeForm} changeIsForm={changeIsForm}></BenefactorsSection>
          </>
        }
        {page === PagesEnum.Auth &&
         <AuthSection changePage={changePage} changeIsAuthorized={changeIsAuthorized}></AuthSection>
        }
        {page === PagesEnum.Admin && isAuthorized &&
          <AdminPage></AdminPage>
        }
        {isForm &&
          <FormSection changeIsForm={changeIsForm}>
            {form === FormsEnum.AskQuestion &&
              <QuestionForm changeIsForm={changeIsForm}></QuestionForm>
            }
            {form === FormsEnum.Donate &&
              <DonateForm changeIsForm={changeIsForm}></DonateForm>
            }
            {form === FormsEnum.CarNumber &&
              <CarNumberForm changeIsForm={changeIsForm}></CarNumberForm>
            }
          </FormSection>
        }
      </main>
      <Footer isAuthorized={isAuthorized} changePage={changePage}></Footer>
    </>
  );
}

export default App;
