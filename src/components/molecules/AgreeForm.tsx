import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const AgreeForm = () => {
  return (
    <>
      <span>약관동의</span>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">스위스 커뮤니티 이용약관</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            스위스 커뮤니티(이하 "서비스")는 스위스에 관심 있는 사용자들이
            소통하고 정보를 교류할 수 있도록 제공되는 플랫폼입니다. 본
            이용약관(이하 "약관")은 사용자가 본 서비스를 이용함에 있어 준수해야
            할 내용을 규정합니다. 서비스를 이용하기 전에 본 약관을 주의 깊게
            읽어 주시기 바랍니다.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">약관의동의</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. 본 서비스를 이용함으로써 귀하는 본 약관에 동의하는 것으로
            간주됩니다. 2. 약관에 동의하지 않을 경우, 서비스를 이용할 수
            없습니다. 3. 본 약관은 필요 시 수시로 변경될 수 있으며, 변경 사항은
            공지 후 즉시 효력이 발생합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">계정 생성 및 관리</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. 서비스를 이용하려면 계정을 생성해야 하며, 정확하고 최신의 정보를
            제공해야 합니다. 2. 귀하는 귀하의 계정 보안 및 활동에 대한
            책임이있습니다. 3. 타인의 계정을 무단으로 사용하거나, 허위 정보를
            제공하는 행위는 금지됩니다.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">사용자 의무</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. 서비스 이용 시 타인의 권리를 침해하거나 불법적인 활동을 해서는
            안됩니다. 2. 다음과 같은 행위는 엄격히 금지됩니다 : 허위 정보 게시
            타인을 비방하거나 불쾌감을 주는 행위 : 스팸, 불법 광고 및 사기 행위
            : 서비스의기술적 안정성을 위협하는 행위 3. 커뮤니티 내에서는 예의를
            지키며, 스위스의 문화와 법률을 존중해야 합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">사용자 의무</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. 서비스 이용 시 타인의 권리를 침해하거나 불법적인 활동을 해서는
            안됩니다. 2. 다음과 같은 행위는 엄격히 금지됩니다 : 허위 정보 게시
            타인을 비방하거나 불쾌감을 주는 행위 : 스팸, 불법 광고 및 사기 행위
            : 서비스의기술적 안정성을 위협하는 행위 3. 커뮤니티 내에서는 예의를
            지키며, 스위스의 문화와 법률을 존중해야 합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">사용자 의무</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. 서비스 이용 시 타인의 권리를 침해하거나 불법적인 활동을 해서는
            안됩니다. 2. 다음과 같은 행위는 엄격히 금지됩니다 : 허위 정보 게시
            타인을 비방하거나 불쾌감을 주는 행위 : 스팸, 불법 광고 및 사기 행위
            : 서비스의기술적 안정성을 위협하는 행위 3. 커뮤니티 내에서는 예의를
            지키며, 스위스의 문화와 법률을 존중해야 합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">사용자 의무</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. 서비스 이용 시 타인의 권리를 침해하거나 불법적인 활동을 해서는
            안됩니다. 2. 다음과 같은 행위는 엄격히 금지됩니다 : 허위 정보 게시
            타인을 비방하거나 불쾌감을 주는 행위 : 스팸, 불법 광고 및 사기 행위
            : 서비스의기술적 안정성을 위협하는 행위 3. 커뮤니티 내에서는 예의를
            지키며, 스위스의 문화와 법률을 존중해야 합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">사용자 의무</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. 서비스 이용 시 타인의 권리를 침해하거나 불법적인 활동을 해서는
            안됩니다. 2. 다음과 같은 행위는 엄격히 금지됩니다 : 허위 정보 게시
            타인을 비방하거나 불쾌감을 주는 행위 : 스팸, 불법 광고 및 사기 행위
            : 서비스의기술적 안정성을 위협하는 행위 3. 커뮤니티 내에서는 예의를
            지키며, 스위스의 문화와 법률을 존중해야 합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AgreeForm;
