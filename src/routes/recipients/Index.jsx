import PublicRoute from "./public.routes";

import Recipient from '../../module/recipient/Index';
import RecipientCreate from '../../module/recipient/Create';
import RecipientShow from '../../module/recipient/Show';
import RecipientEdit from '../../module/recipient/Edit';

function RecipientRoutes({ match }) {
  console.log(match);
  return (
    <>
      <PublicRoute path={`/`} exact element={<Recipient />} />
      <PublicRoute path={`/create`} exact element={<RecipientCreate/>} />
      <PublicRoute path={`/show/:id`} exact element={<RecipientShow/>} />
      <PublicRoute path={`/edit/:id`} exact element={<RecipientEdit/>} />
    </>
  );
}

export default RecipientRoutes;