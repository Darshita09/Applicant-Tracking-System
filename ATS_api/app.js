var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors=require('cors');
var app = express();
var EmailVerify=require('./routes/emailverify_route');
var ForgotPassEmailVerify=require('./routes/forgotpassemailverify_route');
var ats_user=require('./routes/ats_route');
var userlogin=require('./routes/userlogin_route');
var recnm_user=require('./routes/user_recnm_route');
var BDid=require('./routes/getBDCompany_route');
var bdmconm=require('./routes/GetBDMConm_route');
var bdclientcompany=require('./routes/BDClientCompany_route');
var bdmclientco=require('./routes/BDMClientCO_route');
var leadCo=require('./routes/leadCo_route');
var Directorleadco=require('./routes/DirectorLeadCO_route');
var coverttoclient=require('./routes/convertTOclient_route');
var getclientco=require('./routes/GetClientCompany_route');
var bdmclientCOINDESC=require('./routes/BDMClientCOINDESC_route');
var directorclientcompany=require('./routes/DirectorClientCompany_route');
var dirclientCOINDESC=require('./routes/DirectorClientCOINDESC_route');
var removefromclient=require('./routes/RemoveClient_route');
var jobReq=require('./routes/jobReq_route');
var joinjobreq=require('./routes/jobreq_join_route');
var Allconmjoin=require('./routes/job_req_conm_route');
var CoallReq=require('./routes/jobreq_coreq_route');
var updateimage=require('./routes/updateleadcoimage_route');
var noofposition=require('./routes/jobreq_jobtype_route');
var getBDReq=require('./routes/getBDReq_route');
var bdmreq=require('./routes/BDMrequirements_route');
var Assignment=require('./routes/assignment_route');
var RecNMinDirector=require('./routes/DirectorRECNM_route');
//var assignment=require('./routes/assignment_join_route');
var joinassignment=require('./routes/assignment_join_route');
var BDjoinassignment=require('./routes/assignment_BDjoin_route');
var AssiToRecruiter=require('./routes/assitoRecruiter_route');
var BDAssignment=require('./routes/GetBDAssign_route');
var BDMAssign=require('./routes/BDMAssignment_route');
var joinJR=require('./routes/assignment_jobreqjoin_route');
var alljoinbyid=require('./routes/assignment_joinbyid_route');
var submittedassigntobd=require('./routes/submittedassignment_route');
var submitassign=require('./routes/submitassign_route');
var submitassignBDM=require('./routes/BDMSubmittedAssign_route');
var DirectorSubmittedAssign=require('./routes/DirectorSubmittedAssign_route');
var candidate=require('./routes/candidate_route');
var conmreccandidatejoin=require('./routes/candidate_conm_recnmjoin_route');
var conmByID=require('./routes/candidate_conmbyid_route');
var updatecandiresume=require('./routes/updatecandiresume_route');
var candidatestatus=require('./routes/candidate_status_route');
var candiNMByCoId=require('./routes/candidateNMByCoId_route');
var getrecassi=require('./routes/GetRecAssi_route');
var getRECcallog=require('./routes/GetRECCalllog_route');
var ReccandidateNM=require('./routes/RecCandidateNM_route');
var noofcandidate=require('./routes/NoofCandidate_route');
var directorreccalllog=require('./routes/DirectorReccalllog_route');
var candiresumedata=require('./routes/candidate_ResumeData_route');
var BDcandiResumedata=require('./routes/BDCandiResumeData_route');
var BDMCandiResume=require('./routes/BDMCandiResume_route');
var ReccandiResumedata=require('./routes/RecCandiResume_route');
var ResumeDataforupdate=require('./routes/GetResumeDataforUpdate_route');
var candifinalstatus=require('./routes/CandiFinalStatus_route');
var candiRejectstatus=require('./routes/CandiRejectStatus_route');
var Approvedcandidate=require('./routes/ApprovedCandidate_route');
var RejectedCandidate=require('./routes/RejectCandidate_route');
var DirectorapprovedCoNM=require('./routes/DirectorapprovedCONM_route');
var DirectorCandiResume=require('./routes/DirectorCandiResume_route');
var DirApprovedCandi=require('./routes/DirApprovedCandi_route');
var DirRejectedCandi=require('./routes/DirRejectedCandi_route');
var DirsendCandiResume=require('./routes/DirSendCandiResume_route');
var RecassignID=require('./routes/RecAssignID_route');
var ConmbyassignID=require('./routes/ConmByAssigID_route');
var submission=require('./routes/submission_route');
//var conmsubmission=require('./routes/subsheet_conm_route');
var subsheetconmjoin=require('./routes/submissionsheet_conmjoin_route');
var subsheetconmbyid=require('./routes/subsheet_updatebyid_route');
var bdsubmissionsheet=require('./routes/GetBDSubsheet_route');
var Recruitersubmissionsheet=require('./routes/recruitersubsheet_route');
var subsheetforemail=require('./routes/GetCoSubSheetEmail_routes');
var joiningsheet=require('./routes/joiningsheet_route');
var joinsheetconmjoin=require('./routes/joinsheet_conmjoin_route');
var joinsheetallnmbyId=require('./routes/joinsheetALLNMById_route');
var bdjoiningsheet=require('./routes/GetBDJoiningsheet_route');
var BDMjoiningsheet=require('./routes/BDMJoiningsheet_route');
var Recruiterjoiningsheet=require('./routes/RecruiterJoiningsheet_route');
var Invoice=require('./routes/invoice_route');
//var invoice12=require('./routes/invoice_join_route');
var joininvoice=require('./routes/invoice_join_route');
var invoiceJOINbyid=require('./routes/InvoiceJOINByID_route');
var COInvoiceMail=require('./routes/COInvoiceMAIL_route');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/email',EmailVerify);
app.use('/forgotpassemailverify',ForgotPassEmailVerify);
app.use('/users', usersRouter);
app.use('/ATS_User',ats_user);
app.use('/userlogin',userlogin);
app.use('/RecnmByid',recnm_user);
app.use('/bdco',BDid);
app.use('/bdmconm',bdmconm);
app.use('/Lead_company',leadCo);
app.use('/Directorleadco',Directorleadco);
app.use('/converttoclient',coverttoclient);
app.use('/getclientcompany',getclientco);
app.use('/bdclientcompany',bdclientcompany);
app.use('/bdmclientco',bdmclientco);
app.use('/bdmclientCOINDESC',bdmclientCOINDESC);
app.use('/directorclientcompany',directorclientcompany);
app.use('/dirclientCOINDESC',dirclientCOINDESC);  //director client company in descending
app.use('/removefromclient',removefromclient);
app.use('/JobReq',jobReq);
app.use('/joinjobreq',joinjobreq);
app.use('/allcompany',Allconmjoin);
app.use('/coreq',CoallReq);
app.use('/updateimage',updateimage);
app.use('/noofposition',noofposition);
app.use('/Invoice',Invoice);
//app.use('/invoice',invoice12);
app.use('/joininvoice',joininvoice);
app.use('/getbdreq',getBDReq);
app.use('/bdmreq',bdmreq);
app.use('/assignment',Assignment);
app.use('/RECNMinDirector',RecNMinDirector); //Recruiter name to display in director
app.use('/joinassignment',joinassignment);
app.use('/bdjoinassignment',BDjoinassignment);
app.use('/assitorecruiter',AssiToRecruiter);
app.use('/bdassignment',BDAssignment);
app.use('/bdmassign',BDMAssign);
app.use('/submitassign',submitassign);
app.use('/submittedassigntobd',submittedassigntobd);
app.use('/submitassignBDM',submitassignBDM); //submit assign by rec to BDM
app.use('/DirectorSubmittedAssign',DirectorSubmittedAssign); //submitted assignment to director
app.use('/joinJR',joinJR);
app.use('/alljoinbyid',alljoinbyid);
//app.use('/assignment1',assignment);
app.use('/candidate',candidate);
app.use('/corecnmcandidatejoin',conmreccandidatejoin);
app.use('/conmbyid',conmByID);
app.use('/updateresume',updatecandiresume);
app.use('/candidatestatus',candidatestatus);
app.use('/noofcandidate',noofcandidate);
app.use('/candidateNM',candiNMByCoId);
app.use('/getrecassi',getrecassi);
app.use('/getreccalllog',getRECcallog);
app.use('/RECcandidateNM',ReccandidateNM);
app.use('/directorreccalllog',directorreccalllog);
app.use('/candidateresumedata',candiresumedata);
app.use('/BDMCandiResume',BDMCandiResume);
app.use('/ResumeDataforupdate',ResumeDataforupdate); //Get Resume data for update
app.use('/candifinalstatus',candifinalstatus);   //approved final status of candidate 
app.use('/candirejectstatus',candiRejectstatus); //rejected status of candidate
app.use('/Approvedcandidate',Approvedcandidate);
app.use('/Rejectedcandidate',RejectedCandidate);
app.use('/DirapprovedCandi',DirApprovedCandi);
app.use('/DirRejectCandi',DirRejectedCandi);
app.use('/directorapprovedCONM',DirectorapprovedCoNM);
app.use('/DirectorCandiResume',DirectorCandiResume);
app.use('/DirsendCandiResume',DirsendCandiResume);   //Resume send to director
app.use('/BDcandiResumedata',BDcandiResumedata);
app.use('/ReccandiResumedata',ReccandiResumedata);
app.use('/RecassignID',RecassignID);
app.use('/conmbyassignID',ConmbyassignID);
app.use('/submission',submission);
//app.use('/conmjoinsubsheet',conmsubmission);
app.use('/subsheetconmjoin',subsheetconmjoin);
app.use('/subsheetconmbyid',subsheetconmbyid);
app.use('/bdsubmissionsheet',bdsubmissionsheet);
app.use('/Recruitersubmssionsheet',Recruitersubmissionsheet);
app.use('/subsheetforemail',subsheetforemail);
app.use('/joiningsheet',joiningsheet);
app.use('/joinsheetconmjoin',joinsheetconmjoin);
app.use('/joinsheetallnmbyid',joinsheetallnmbyId);
app.use('/bdjoiningsheet',bdjoiningsheet);
app.use('/BDMjoiningsheet',BDMjoiningsheet);
app.use('/Recruiterjoiningsheet',Recruiterjoiningsheet);
app.use('/invoiceJOINbyid',invoiceJOINbyid);
app.use('/CoInvoiceMail',COInvoiceMail);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
